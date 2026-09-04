import { useEffect, useState } from "react";

function App() {
    const [backend, setBackend] = useState(null);
    const [assessments, setAssessments] = useState([]);

    useEffect(() => {
        fetch("/api/health")
            .then((response) => response.json())
            .then((data) => setBackend(data))
            .catch((error) => console.error(error));

        fetch("/api/assessments")
            .then((response) => response.json())
            .then((data) => setAssessments(data.assessments))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Ford DAT - CI/CD Demo</h1>

            <h2>Backend Status</h2>

            <p>
                {backend?.status || "Checking backend..."}
            </p>

            <h2>Assessments</h2>

            {assessments.map((assessment) => (
                <div key={assessment.id}>
                    <strong>{assessment.id}</strong>
                    {" - "}
                    {assessment.dealer}
                    {" - "}
                    {assessment.status}
                </div>
            ))}
        </div>
    );
}

export default App;