const express = require('express');
const router = express.Router();
const {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    updateUsuarioRol
} = require('../controllers/users.controller');

const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Usuarios logueados pueden ver todos
router.get('/', verifyToken,getUsuarios);
router.get('/:id', verifyToken, getUsuarioById);
// Solo admins pueden crear o eliminar
router.post('/', verifyToken, isAdmin, createUsuario);
router.delete('/:id', verifyToken, isAdmin, deleteUsuario);
// Actualización de datos:
router.put('/:id', verifyToken, updateUsuario); // modificar datos propios
router.put('/:id/rol', verifyToken, isAdmin, updateUsuarioRol); // solo admin puede cambiar rol

module.exports = router;
