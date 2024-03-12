import express from "express";
import { generarProductosAleatorios } from "../controllers/mocking.controller.js";

const router = express.Router()

router.get('/mockingproducts', async (req, res) => {
    try {
        // Genera los productos aleatorios
        await generarProductosAleatorios();

        res.status(200).json({ message: 'Productos generados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al generar productos.' });
    }
});

export default router;