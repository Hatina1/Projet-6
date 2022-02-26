const Sauce = require("../models/sauce");

exports.createSauce = (req, res, next) => {
	const sauce = new Sauce({
		userId: req.body.userId,
		name: req.body.name,
		manufacturer: req.body.manufacturer,
		description: req.body.description,
		mainPepper: req.body.mainPepper,
		imageUrl: req.body.imageUrl,
		heat: req.body.heat,
		likes: req.body.likes,
		dislikes: req.body.dislikes,
	});
	sauce
		.save()
		.then(() => res.status(201).json({ message: "Sauce created !" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.createStatus = (req, res, next) => {
	const sauce = new Sauce({
		likes: req.body.likes,
		dislikes: req.body.dislikes,
		usersLiked: usersLiked.push(req.body.usersId),
		usersDisliked: usersDisliked.push(req.body.usersId),
	});
	sauce
		.save()
		.then(() => res.status(201).json({ message: "Sauce created !" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
	Sauce.findOne({ _id: req.params.id })
		.then((sauce) => {
			res.status(200).json(sauce);
		})
		.catch((error) => res.status(404).json({ error }));
};

exports.modifySauce = (req, res, next) => {
	const sauce = new Sauce({
		userId: req.body.userId,
		name: req.body.name,
		manufacturer: req.body.manufacturer,
		description: req.body.description,
		mainPepper: req.body.mainPepper,
		imageUrl: req.body.imageUrl,
		heat: req.body.heat,
		likes: req.body.likes,
		dislikes: req.body.dislikes,
		usersLiked: req.body.usersLiked,
		usersDisliked: req.body.usersDisliked,
	});
	Sauce.updateOne({ _id: req.params.id, sauce })
		.then(() => {
			res.status(200).json({ message: "Sauce modified !" });
		})
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
	Sauce.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({ message: "Deleted!" });
		})
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
	Sauce.find()
		.then((sauces) => {
			res.status(200).json(sauces);
		})
		.catch((error) => res.status(400).json({ error }));
};
