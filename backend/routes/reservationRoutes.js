const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
    try{
        const reservations = await prisma.Reservation.findMany();
        if (!reservations) {
            return res.status(404).json({ error: 'Aucune réservation trouvée' });
        }
        res.status(200).json(reservations);
    }
    catch(error){res.status(400).json({message : error.message})}
}

exports.getId = async (req, res) => {
    try {
        const reservation = await prisma.Reservation.findUnique({
            where: { id_reservation: parseInt(req.params.id) },
        });
        if (!reservation) {return res.status(404).json({ error: "Cette réservation n'existe pas" });}
        res.status(200).json(reservation)

        
    } 
    catch(error){res.status(400).json({message : error.message})}
}

exports.create = async (req, res) => {
    try {
        const newRes = await prisma.Reservation.create({data : req.body});
        res.status(201).json(newRes);
    } catch (error) {
        res.status(400).json({message : error.message});  
    }
}

exports.update = async (req, res) => {
    try {
        const reservation = await prisma.Reservation.update({
            where: { id_reservation: parseInt(req.params.id) },
            data: req.body,
        });
        res.status(200).json(reservation);
        
    } catch (error) {
        res.status(400).json({message : error.message}); 
    }
}

exports.delete = async (req, res) => {
    try {
        const reservation = await prisma.Reservation.delete({
            where: { id_reservation: parseInt(req.params.id) },
        })
        res.status(200).json({ message: 'Réservation supprimé avec succès' });

    } catch (error) {
        res.status(400).json({message : error.message});
    }
}