***
API
***


.. raw:: html

   <hr style="border-color: black; border-width: 2px;">

Module: ``TrackController``
***************************


.. contents:: Local Navigation
   :local:

   
Description
===========

REST interaces for TrackController

this is a inline code: :code:`a = b + c` and txt after it.

Test *italics* and **bold** and ``monspaced`` text.


.. _module-TrackController.get:


Function: ``get``
=================

enumerate tracks or search track list.

Get all tracks:

:code:`GET /track/get`

Get filtered tracks by dataset:

:code:`GET /track/get?id=1` where id is the dataset id

:code:`GET /track/get?pat=sample_data/json/volvox`, where path is the dataset path

.. js:function:: get(req, res)

    
    :param object req: punctuary
    :param object res: postuary
    
.. _module-TrackController.add:


Function: ``add``
=================

This is a description wonderful eggs hatch into lovely swans that lay golden eggs.

.. code-block:: node
  var x = 1;

+---+---+
| A | B |
+---+---+
| C | D |
+---+---+

This is a *italics* in a function description:
::

     {
         var x = 1;
         function abc(z) {
             console.log("z=",z);
         }
     }

.. js:function:: add(req, res)

    
    :param object req: zingle mingle
    
    Code block in param description:
    ::
    
         {
             wifi: "sparkle",
             swindle: true
         }
    :param object res: sizzle
    
    **codeblock 2:**
    ::
         {
             apple: "crunch",
             pear: "green"
         }
    
.. _module-TrackController.modify:


Function: ``modify``
====================

Description of Modify

.. code-block:: node

  var x = 1;

.. js:function:: modify(req, res)

    
    :param object req: very interesting
    +---+---+
    | A | B |
    +---+---+
    | C | D |
    +---+---+
    :param object res: nothing else follows
    
.. _module-TrackController.remove:


Function: ``remove``
====================

A fine thing to remove

A link to remember: `Stack Overflow <http://stackoverflow.com/>`_.

Test hyperlink: SO_.

.. _SO: http://stackoverflow.com/

.. js:function:: remove(req, res)

    
    :param object req: fizzle
    
    A hyper link in a new tab: |location_link|.
    
    .. |location_link| raw:: html
    
      <a href="http://geoiptool.com" target="_blank">check your location here</a>
    :param object res: frazzle
    





