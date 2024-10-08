import { CustomRequest, CustomResponse } from '../types/express';
import User, { IUser } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req: CustomRequest, res: CustomResponse) => {
    const { email, password , firstName, lastName} = req.body;

    try {
        // Check if user exists
        const existingUser: IUser | null = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser: IUser = new User({
            email,
            password: hashedPassword,
            lastName: lastName,
            firstName: firstName
        });

        await newUser.save();

        // Create JWT
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login User
export const loginUser = async (req: CustomRequest, res: CustomResponse) => {
    const { email, password } = req.body;

    try {
        // Find user
        const user: IUser | null = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Create JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get User Profile
export const getUserProfile = async (req: CustomRequest, res: CustomResponse) => {
    try {
        const user: IUser | null = await User.findById(req.userId).select('-password').lean();

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' });
    }
};
