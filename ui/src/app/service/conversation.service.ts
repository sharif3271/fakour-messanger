import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IConversation } from "../models/conversation.model";

@Injectable({
    providedIn: 'root'
})
export class ConversationServices {
    url = 'http://localhost:4200';

    constructor(private http: HttpClient) {

    }

    getAllConversations(): Observable<IConversation[]> {
        return this.http.get<IConversation[]>(this.url + '/assets/data/mock-conversations.json')
    }
}