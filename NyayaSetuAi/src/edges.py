from src.state import AssistantState

def check_session_limits(state: AssistantState) -> str:
    """Routes to the login wall if a guest hits their threshold."""
    if not state["is_logged_in"] and state["turn_count"] >= state["max_free_turns"]:
        return "login_wall"
    return "continue_processing"

def route_by_intent(state: AssistantState) -> str:
    """Routes to the specific legal workspace based on user prompt."""
    if state["intent"] == "document_review":
        return "doc_review"
    return "general_advice"