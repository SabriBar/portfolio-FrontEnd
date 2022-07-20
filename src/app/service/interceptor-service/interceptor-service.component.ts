import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-interceptor-service',
  templateUrl: './interceptor-service.component.html',
  styleUrls: ['./interceptor-service.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceComponent implements OnInit {

  constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let intReq = req;
      const token = this.tokenService.getToken();
      if(token != null){
        intReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer' +token)
        })
      }
      return next.handle(intReq);
    }
   

  ngOnInit(): void {
  }

}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorServiceComponent,
  multi: true
}];
