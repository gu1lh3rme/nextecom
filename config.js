const DB_URI = "mongodb+srv://gu1lh3rmesv:<BobEsponja>@cluster0.uanfodt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const API = process.env.NODE_ENV === "production" ? "https://xxx:vercel.com/api" : "http://localhost:3000/api"

const NEXTAUTH_SECRET = "SUDAFEW0938UR03294UR84390IU"

module.exports = {
    DB_URI,
    API,
    NEXTAUTH_SECRET
}