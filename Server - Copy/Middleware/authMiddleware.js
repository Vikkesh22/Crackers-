const jwt = require('jsonwebtoken');

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const isMatch = await user.matchPassword(password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET, // Ensure this line is correctly referencing the secret
            { expiresIn: '1h' }
        );
        res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
