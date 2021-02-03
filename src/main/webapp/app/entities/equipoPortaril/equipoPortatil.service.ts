import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IEquipo } from 'app/shared/model/equipo.model';

type EntityResponseType = HttpResponse<IEquipo>;
type EntityArrayResponseType = HttpResponse<IEquipo[]>;

@Injectable({ providedIn: 'root' })
export class EquipoPortatilService {
  public resourceUrl = SERVER_API_URL + 'api/equipos';
  public resourceUrlPortatil = SERVER_API_URL + 'api/equiposPortatil';

  constructor(protected http: HttpClient) {}

  create(equipo: IEquipo): Observable<EntityResponseType> {
    return this.http.post<IEquipo>(this.resourceUrl, equipo, { observe: 'response' });
  }

  update(equipo: IEquipo): Observable<EntityResponseType> {
    return this.http.put<IEquipo>(this.resourceUrl, equipo, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEquipo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEquipo[]>(this.resourceUrlPortatil, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
