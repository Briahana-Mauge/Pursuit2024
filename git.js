// GIT is a piece of software that manages different versions of text through version control
//              *manages different timelines for a codebase*

// Directed - Orders nodes to different places
// Acyclic - no cycles (you'll never see the same node twice) each commit has a unique ID
// Graph - network of nodes

// git diff - shows the difference in a file between the current timeline (new head) vs the previous one (old head)
// git merge - makes the lastest/newest commit the new head (should only be done in the main branch)  combines two history (all branch commits ends up on main)
// git rebase - overrides the old tree