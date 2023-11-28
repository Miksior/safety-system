import { Injectable } from '@angular/core';
import { environment } from '../../../shared/environment/environment';
import { HttpClient } from '@angular/common/http';
import { SiteDetailsDto, SiteDto, SystemDetailsDto } from '../../../shared/dto.types';


@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(private http: HttpClient) { }

  public getSites(){
    return this.http.get<SiteDto[]>(`${environment.APIURL}/${environment.SITESURL}`)
  }

  public getSite(siteId: string){
    return this.http.get<SiteDetailsDto[]>(`${environment.APIURL}/${environment.SITESURL}/${siteId}`)
  }

  public getSystem(siteId: string, systemId: string){
    return this.http.get<SystemDetailsDto[]>(`${environment.APIURL}/${environment.SITESURL}/${siteId}/${environment.SYSTEMURL}/${systemId}`)
  }
}
