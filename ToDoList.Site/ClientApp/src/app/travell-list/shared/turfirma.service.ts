import { Injectable } from "@angular/core";
import { ITurfirma } from './turfirma.interface';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TurfirmaService {
    private readonly apiUrl: string = 'http://localhost:4200/rest/Turfirma';

    constructor(private httpClient: HttpClient) {
    }

    public addTurfirma(turfirma: ITurfirma): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, turfirma);
    }

    public getTurfirmas(): Observable<ITurfirma[]> {
        return this.httpClient.get<ITurfirma[]>(this.apiUrl);
    }

    public getTurfirmaById(id_t: number): Observable<ITurfirma[]> {
        return this.httpClient.get<ITurfirma[]>(`${this.apiUrl}/${id_t}`);
    }

    public updateTurfirma(turfirma: ITurfirma): Observable<null> {
        return this.httpClient.put<null>(`${this.apiUrl}/update`,  turfirma);
    }

    public deleteTurfirma(id_t: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id_t}/delete`);
    }
}
