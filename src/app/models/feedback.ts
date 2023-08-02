import { Collaborator } from "./collaborator";

export interface Feedback {
    id?: String;
    collaborator: Collaborator;
    moment: String;
    feedbackText: String;
}