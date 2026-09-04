from fastapi import FastAPI

app = FastAPI(
    title="CICD Backend",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "application": "CICD",
        "service": "backend",
        "status": "running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/api/assessments")
def get_assessments():
    return {
        "assessments": [
            {
                "id": "ASM-001",
                "dealer": "Demo Dealer",
                "status": "Scheduled"
            },
            {
                "id": "ASM-002",
                "dealer": "Test Dealer",
                "status": "Draft"
            }
        ]
    }