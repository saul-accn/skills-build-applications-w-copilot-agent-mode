"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("./config/database");
exports.app = (0, express_1.default)();
const PORT = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
exports.app.use(express_1.default.json());
const users = [
    { id: 1, name: 'Ava Thompson', email: 'ava@example.com', role: 'student' },
    { id: 2, name: 'Noah Patel', email: 'noah@example.com', role: 'coach' },
    { id: 3, name: 'Mila Nguyen', email: 'mila@example.com', role: 'student' }
];
const teams = [
    { id: 1, name: 'Sunrise Striders', sport: 'Running', members: 6 },
    { id: 2, name: 'Peak Performers', sport: 'Strength', members: 8 },
    { id: 3, name: 'River Runners', sport: 'Cycling', members: 5 }
];
const activities = [
    { id: 1, userId: 1, type: 'Run', duration: 35, calories: 320, date: '2026-08-01' },
    { id: 2, userId: 2, type: 'Workout', duration: 45, calories: 410, date: '2026-08-02' },
    { id: 3, userId: 3, type: 'Bike Ride', duration: 60, calories: 500, date: '2026-08-03' }
];
const leaderboard = [
    { rank: 1, name: 'Ava Thompson', score: 3200 },
    { rank: 2, name: 'Mila Nguyen', score: 2950 },
    { rank: 3, name: 'Noah Patel', score: 2785 }
];
const workouts = [
    { id: 1, name: 'Interval Sprint', difficulty: 'Moderate', duration: 25 },
    { id: 2, name: 'Strength Circuit', difficulty: 'Advanced', duration: 40 },
    { id: 3, name: 'Mobility Flow', difficulty: 'Beginner', duration: 20 }
];
exports.app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Octofit Tracker API',
        apiBaseUrl,
        routes: ['/health', '/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts']
    });
});
exports.app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Octofit Tracker API is running',
        baseUrl: apiBaseUrl
    });
});
exports.app.get(['/api/users', '/api/users/'], (req, res) => {
    res.json(users);
});
exports.app.get(['/api/teams', '/api/teams/'], (req, res) => {
    res.json(teams);
});
exports.app.get(['/api/activities', '/api/activities/'], (req, res) => {
    res.json(activities);
});
exports.app.get(['/api/leaderboard', '/api/leaderboard/'], (req, res) => {
    res.json(leaderboard);
});
exports.app.get(['/api/workouts', '/api/workouts/'], (req, res) => {
    res.json(workouts);
});
exports.default = exports.app;
if (require.main === module) {
    exports.app.listen(PORT, () => {
        console.log(`Octofit Tracker API server running on port ${PORT}`);
        console.log(`API base URL: ${apiBaseUrl}`);
    });
}
