/**
 * @module
 * @description
 * REST interaces for TrackController
 */

module.exports = {
    /**
     * enumerate tracks or search track list.
     * 
     * Get all tracks
     * :bash:`GET /track/get`
     * 
     * Get filtered tracks by dataset:
     * 
     * :bash:`GET /track/get?id=1` where id is the dataset id
     * 
     * :bash:`GET /track/get?pat=sample_data/json/volvox` where path is the dataset path
     * 
     * 
     * @param {object} req
     * @param {object} res
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
     * 
     * @param {object} req
     * @param {object} res
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
     * 
     * @param {type} req
     * @param {type} res
     * @returns {unresolved}
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

