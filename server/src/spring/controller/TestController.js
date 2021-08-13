const task = {
	blue: {
        'green': 'green',
        'yellow': 'yellow'
    },
	green: {
        'blue': 'blue'
    },
	yellow: {
        'blue': 'blue'
    }
}

class TestController {
    static async getValue(req, res) {
        let { next_step = '', current_step = '' } = req.query || {}
        next_step = task[`${current_step}`.toLowerCase()]?.[`${next_step}`.toLowerCase()]

        if (next_step === undefined) {
            // res.status(400)
            res.json({
                msg: 'Invalid request',
                error: true
            })
            return
        }
        res.json({ next_step, current_step })
    }
}

export default TestController