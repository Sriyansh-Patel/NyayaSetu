from langgraph.graph import StateGraph, START, END
from src.state import AssistantState
from src.nodes import intent_classifier_node, basic_legal_advisor_node, document_reviewer_node, login_prompt_node
from src.edges import check_session_limits, route_by_intent

# Initialize graph
workflow = StateGraph(AssistantState)

# Add Nodes
workflow.add_node("classifier", intent_classifier_node)
workflow.add_node("general_advice", basic_legal_advisor_node)
workflow.add_node("doc_review", document_reviewer_node)
workflow.add_node("login_wall", login_prompt_node)

# Build Graph Topography
# 1. Start -> Check Session Limit -> Classifier OR Login Wall
workflow.add_conditional_edges(
    START,
    check_session_limits,
    {
        "login_wall": "login_wall",
        "continue_processing": "classifier"
    }
)

# 2. Classifier Routing
workflow.add_conditional_edges(
    "classifier",
    route_by_intent,
    {
        "doc_review": "doc_review",
        "general_advice": "general_advice"
    }
)

# 3. Connect processing nodes back to the end
workflow.add_edge("general_advice", END)
workflow.add_edge("doc_review", END)
workflow.add_edge("login_wall", END)

# Compile Graph
legal_assistant_pipeline = workflow.compile()