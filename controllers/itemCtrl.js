const Thing = require("../models/itemModel");
// const fs = require('fs');

exports.createItem = (req, res, next) => {
    const itemObject = JSON.parse(req.body.item);
    delete itemObject._id;
    const item = new item({
      ...itemObject,
    //   imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    item.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.modifyItem = (req, res, next) => {
    const itemObject = req.file ?
      {
        ...JSON.parse(req.body.item),
        // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Item.updateOne({ _id: req.params.id }, { ...itemObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteiTEM = (req, res, next) => {
    iTEM.findOne({ _id: req.params.id })
        .then((item) => {
            if (!item) {
                return res.status(404).json({
                    error: new Error('Objet non trouvé !')
                });
            }
            if (item.userId !== req.auth.userId) {
                return res.status(400).json({
                    error: new Error('Requête non autorisée !')
                })
            }
            // const filename = item.imageUrl.split('/images/')[1];
            // fs.unlink(`images/${filename}`, () => 
            // {
            //     Item.deleteOne({ _id: req.params.id })
            //     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            //     .catch(error => res.status(400).json({ error }));
            // });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getOneItem = (req, res, next) => {
    Item.findOne({ _id: req.params.id })
        .then(item => res.status(200).json(( item )))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllItem = (req, res, next) => {
    Item.find()
        .then(items => res.status(200).json(( items )))
        .catch(error => res.status(400).json({ error }));
};