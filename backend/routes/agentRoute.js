import express from 'express';
import { loginAgent,registerAgent} from '../controllers/agentController.js';

const agentRouter=express.Router();

agentRouter.post('/register',registerAgent)
agentRouter.post('/login',loginAgent)

export default agentRouter;