from langchain_openai import ChatOpenAI
from langchain_core.messages import AIMessage
from src.state import AssistantState

# Define your LLM with LangSmith tracing active automatically via environment variables
llm = ChatOpenAI(model="gpt-4o", temperature=0.2)

def intent_classifier_node(state: AssistantState):
    """Classifies what kind of legal assistance the user needs."""
    last_message = state["messages"][-1].content
    
    # Simple structured classification prompt
    prompt = f"Classify the following legal query into one category: 'legal_advice', 'document_review', or 'general'. Query: {last_message}"
    response = llm.invoke(prompt)
    
    # Extract intent safely (production code should use structured outputs / tool calling)
    intent = response.content.lower()
    return {"intent": intent if intent in ["legal_advice", "document_review"] else "general"}

def basic_legal_advisor_node(state: AssistantState):
    """Handles standard legal drafting or advice."""
    messages = state["messages"]
    # Dynamic prompt tweak if user is logged in (allows deep tailoring)
    system_instruction = "You are a professional corporate legal assistant. Provide a precise response."
    if state["is_logged_in"]:
        system_instruction += " Offer comprehensive suggestions and list subsequent regulatory checks."
        
    response = llm.invoke([{"role": "system", "content": system_instruction}] + messages)
    
    return {
        "messages": [response],
        "turn_count": state["turn_count"] + 1
    }

def document_reviewer_node(state: AssistantState):
    """Specialized node for analyzing contract clauses."""
    messages = state["messages"]
    response = llm.invoke([{"role": "system", "content": "You are an expert contract lawyer. Review this document for risk factors."}] + messages)
    return {
        "messages": [response],
        "turn_count": state["turn_count"] + 1
    }

def login_prompt_node(state: AssistantState):
    """Triggered when the user hits their usage limit."""
    msg = AIMessage(content="🔒 You have reached your limit for this session. Please Log In or register an account to continue deep analysis with your legal assistant.")
    return {"messages": [msg]}