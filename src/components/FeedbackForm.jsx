import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"


function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if(e.target.value === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (e.target.value !== '' && e.target.value.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => console.log(rating)}/>
            <div className="input-group">
                <input onChange = {handleTextChange} 
                type="text" 
                placeholder="Write a review" 
                value={text} />
                <Button type="submit" isDisabled={btnDisabled}> Send </Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm