/**
 * @module
 * @description
 * REST interaces for TrackController
 * 
 * this is a inline code: :code:`a = b + c` and txt after it.
 * 
 * Test *italics* and **bold** and ``monspaced`` text.
 * 
 */

module.exports = {
    /**
     * enumerate tracks or search track list.
     * 
     * Get all tracks:
     * 
     * :code:`GET /track/get`
     * 
     * Get filtered tracks by dataset:
     * 
     * :code:`GET /track/get?id=1` where id is the dataset id
     * 
     * :code:`GET /track/get?pat=sample_data/json/volvox`, where path is the dataset path
     * 
     * @param {object} req
     * 
     * @param {object} res
     * 
     */
    get: function(req,res) {
        var params = req.allParams();
        sails.log("/track/get",params);
        if (req.method === 'GET') {
            Track.Get(params,function(err,records) {
                if (err) res.serverError(err);
                if (records.length===0) return res.notFound();
                return res.ok(records);
            });
        } 
        else 
            return res.forbidden('requires POST');
    },
    /**
     * This is a description wonderful eggs hatch into lovely swans that lay golden eggs.
     * 
     * .. code-block:: node
     *   var x = 1;
     * 
     * +---+---+
     * | A | B |
     * +---+---+
     * | C | D |
     * +---+---+
     * 
     * This is a *italics* in a function description:
     * ::
     * 
     *      {
     *          var x = 1;
     *          function abc(z) {
     *              console.log("z=",z);
     *          }
     *      }
     * 
     * 
     * @param {object} req - zingle mingle
     * 
     * Code block in param description:
     * ::
     * 
     *      {
     *          wifi: "sparkle",
     *          swindle: true
     *      }
     * 
     * @param {object} res - sizzle
     * 
     * **codeblock 2:**
     * ::
     *      {
     *          apple: "crunch",
     *          pear: "green"
     *      }
     *      
     */
    add: function(req,res) {
        var params = req.allParams();
        var track = params.track;
        if (req.method === 'POST') {
            Track.Add(track,function(err,created) {
                if (err) return res.serverError({err:err,track:track});
                return res.ok(created);
            });
        } 
        else 
            return res.forbidden('requires POST');
    },
    /**
     * Description of Modify
     * 
     * .. code-block:: node
     * 
     *   var x = 1;
     * 
     * @param {object} req - very interesting
     * +---+---+
     * | A | B |
     * +---+---+
     * | C | D |
     * +---+---+
     * 
     * @param {object} res - nothing else follows
     *
     */
    modify: function(req,res) {
        var params = req.allParams();
        var track = params.track;
        if (req.method === 'POST') {
            Track.Modify(track,function(err,modified) {
                if (err) return res.serverError({err:err,track:track});
                return res.ok(modified);
            });
        } 
        else 
            return res.forbidden('requires POST');
        
    },
    /**
     * 
     * @param {type} req
     * @param {type} res
     * @returns {unresolved}
     */
    remove: function(req,res) {
        var params = req.allParams();
        var id = params.trackId;
        if (req.method === 'POST') {
            Track.Remove(id,function(err) {
                if (err) return res.serverError({err:err});
                return res.ok();
            });
        } 
        else 
            return res.forbidden('requires POST');
        
    }
};

