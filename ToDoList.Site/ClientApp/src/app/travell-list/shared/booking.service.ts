import { Injectable } from "@angular/core";
import { IBooking } from './booking.interface';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookingService {
    private readonly apiUrl: string = 'http://localhost:4200/rest/Booking';

    constructor(private httpClient: HttpClient) {
    }

    public addBooking(booking: IBooking): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, booking);
    }

    public getBookings(): Observable<IBooking[]> {
        return this.httpClient.get<IBooking[]>(this.apiUrl);
    }

    public getBookingById(id_b: number): Observable<IBooking[]> {
        return this.httpClient.get<IBooking[]>(`${this.apiUrl}/${id_b}`);
    }

    public updateBooking(booking: IBooking): Observable<null> {
        return this.httpClient.put<null>(`${this.apiUrl}/update`,  booking);
    }

    public deleteBooking(id_b: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id_b}/delete`);
    }
}