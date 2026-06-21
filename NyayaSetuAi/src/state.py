from typing import List, Dict, TypedDict, Annotated
from langchain_core.messages import BaseMessage
from langgraph.graph.message import add_messages

class AssistantState(TypedDict):
    # Appends new messages to the existing chat history
    messages: Annotated[List[BaseMessage], add_messages]
    
    # Session controls
    is_logged_in: bool
    turn_count: int
    max_free_turns: int
    
    # Classification for intent-based routing
    intent: str  # e.g., "document_analysis", "legal_advice", "case_search"