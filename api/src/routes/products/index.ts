import express, { Router } from 'express';

// products endpoint
const router = Router();

router.get('/', (req, res) => {
    res.send('The List of Products 789');
}) 

router.get('//:id', (req, res) => {
    console.log(req.params);
    res.send('A Products');
}) 

router.post('/', (req, res) => {
    res.send('New Product Created');
}) 

export default router;