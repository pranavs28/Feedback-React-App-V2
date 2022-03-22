import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="display-text">
            <h3>About:</h3>
            <p>This project is a feedback app designed as a React tool to add, update,
                and delete feedback reviews in an end-to-end web application.
            </p>
            <br/>
            <Link to='/'>Back to Home</Link>
        </div>
    </Card>
  )
}

export default AboutPage