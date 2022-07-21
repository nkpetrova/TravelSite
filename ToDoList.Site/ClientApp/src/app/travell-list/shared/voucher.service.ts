import { Injectable } from "@angular/core";
import { IVoucher } from './voucher.interface';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VoucherService {
    private readonly apiUrl: string = 'http://localhost:4200/rest/Voucher';

    constructor(private httpClient: HttpClient) {
    }

    public addVoucher(voucher: IVoucher): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, voucher);
    }

    public getVouchers(): Observable<IVoucher[]> {
        return this.httpClient.get<IVoucher[]>(this.apiUrl);
    }

    public getVoucherById(id: number): Observable<IVoucher[]> {
        return this.httpClient.get<IVoucher[]>(`${this.apiUrl}/${id}`);
    }

    public updateVoucher(voucher: IVoucher): Observable<null> {
        return this.httpClient.put<null>(`${this.apiUrl}/update`, voucher);
    }

    public deleteVoucher(id: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id}/delete`);
    }
}