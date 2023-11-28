import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SitesService } from './sites.service';
import { environment } from 'apps/shared/environment/environment';

describe('SitesService', () => {
  let service: SitesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SitesService]
    });
    service = TestBed.inject(SitesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve sites', () => {
    const dummySites = [
      { id: '1', name: 'Site 1' },
      { id: '2', name: 'Site 2' }
    ];

    service.getSites().subscribe(sites => {
      expect(sites.length).toBe(2);
      expect(sites).toEqual(dummySites);
    });

    const req = httpMock.expectOne(`${environment.APIURL}/${environment.SITESURL}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySites);
  });

  it('should retrieve site details', () => {
    const dummySiteId = '1';
    const dummySiteDetails = [
      { id: '1', name: 'Site 1', location: 'Location 1' }
    ];

    service.getSite(dummySiteId).subscribe(siteDetails => {
      expect(siteDetails.length).toBe(1);
      expect(siteDetails).toEqual(dummySiteDetails);
    });

    const req = httpMock.expectOne(`${environment.APIURL}/${environment.SITESURL}/${dummySiteId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySiteDetails);
  });

  it('should retrieve system details', () => {
    const dummySiteId = '1';
    const dummySystemId = '1';
    const dummySystemDetails = [
      { id: '1', name: 'System 1', type: 'Type 1' }
    ];

    service.getSystem(dummySiteId, dummySystemId).subscribe(systemDetails => {
      expect(systemDetails.length).toBe(1);
      expect(systemDetails).toEqual(dummySystemDetails);
    });

    const req = httpMock.expectOne(`${environment.APIURL}/${environment.SITESURL}/${dummySiteId}/${environment.SYSTEMURL}/${dummySystemId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySystemDetails);
  });
});
