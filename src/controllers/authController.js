const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        const existe = await Usuario.findOne({ where: { email } });
        if (existe) return res.status(400).json({ msg: 'Usuario ya existe' });

        const hash = await bcrypt.hash(password, 10);

        const user = await Usuario.create({
            nombre,
            email,
            password: hash,
            rol
        });

        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });
    if (!user) return res.status(400).json({ msg: 'No existe' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: 'Password incorrecto' });

    const token = jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
};