import { Injectable } from '@angular/core';
declare var toastr: any;

@Injectable()
export class ToasterServiceService {

  constructor() {
    this.setting();
  }
  Success(title: string, message?: string) {
    return toastr.success(title, message);
  }

  setting() {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
}
