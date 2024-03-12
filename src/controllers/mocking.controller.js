const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Importa el esquema de productos
const Producto = require('./models/productoSchema');

// Función para generar productos aleatorios
export const generarProductosAleatorios = async () => {
    try {

        const productos = [];
        for (let i = 0; i < 100; i++) {
            const producto = {
                title: `Producto ${i + 1}`,
                price: Math.random() * 1000, 
                description: `Descripción del producto ${i + 1}`,
                code: `CODE${i.toString().padStart(4, '0')}`, 
                stock: Math.floor(Math.random() * 5000)
            };
            productos.push(producto);
        }

        // Inserta los productos generados en la base de datos
        await Producto.insertMany(productos);
        console.log('Productos generados correctamente.');
    } catch (error) {
        console.error('Error al generar productos:', error);
    }
};