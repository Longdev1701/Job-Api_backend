const express = require('express')
const { 
    getAllJobs,
    getJob, 
    createJob, 
    updateJob, 
    deleteJob 
} = require('../controllers/jobs')
const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         company:
 *           type: string
 *         position:
 *           type: string
 *         status:
 *           type: string
 *           example: pending
 *         createdBy:
 *           type: string
 *       required:
 *         - company
 *         - position
 *     CreateJobRequest:
 *       type: object
 *       required:
 *         - company
 *         - position
 *       properties:
 *         company:
 *           type: string
 *         position:
 *           type: string
 *         status:
 *           type: string
 *           example: pending
 *     UpdateJobRequest:
 *       type: object
 *       properties:
 *         company:
 *           type: string
 *         position:
 *           type: string
 *         status:
 *           type: string
 *           example: interview
 */

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List jobs
 *       401:
 *         description: Authentication invalid
 */
router.get('/', getAllJobs)

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateJobRequest'
 *     responses:
 *       201:
 *         description: Job created
 *       400:
 *         description: Bad request
 *       401:
 *         description: Authentication invalid
 */
router.post('/', createJob)

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a single job by id
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job found
 *       401:
 *         description: Authentication invalid
 *       404:
 *         description: Job not found
 */
router.get('/:id', getJob)

/**
 * @swagger
 * /jobs/{id}:
 *   patch:
 *     summary: Update a job by id
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateJobRequest'
 *     responses:
 *       200:
 *         description: Job updated
 *       400:
 *         description: Bad request
 *       401:
 *         description: Authentication invalid
 *       404:
 *         description: Job not found
 */
router.patch('/:id', updateJob)

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job by id
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job deleted
 *       401:
 *         description: Authentication invalid
 *       404:
 *         description: Job not found
 */
router.delete('/:id', deleteJob)

module.exports = router

module.exports = router