import os
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFacePipeline, HuggingFaceEmbeddings

# 1. Groq Cloud Engine for fast inference routing and conversation
groq_llm = ChatGroq(
    model="llama3-70b-8192", 
    temperature=0.1,
    groq_api_key=os.getenv("GROQ_API_KEY")
)

# 2. Local Embedding or local model pipeline from Hugging Face
# Used for document retrieval or local parsing layers
hf_embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")