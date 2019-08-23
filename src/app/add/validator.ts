import {Injectable} from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class ValidatorForm {
  messageValidationError: any;
  formErrors = {
    name: '',
    slug: '',
    price: null,
    description: '',
    detail: '',
    image: ''
  };

  constructor(private formBuilder: FormBuilder) {
  }

  createForm(model: any) {
    // this.getValidationMessages();
    let form: FormGroup;
    form = this.formBuilder.group({
      'name': [model.name, Validators.required],
      'slug': [model.slug],
      'price': [model.price],
      'description': [model.price],
      'detail': [model.detail],
      'image': [model.image]
      // 'comment': [model.comment, [Validators.maxLength(300)]],
      // 'place': [model.place, [Validators.maxLength(20)]],
      // 'lunchBoxId': [model.lunchBoxId],
      // 'orderNumberOfLunchBox': [model.orderNumberOfLunchBox],
      // 'presentationTopicId': [model.presentationTopicId],
      // 'startTime': [model.startTime],
      // 'endTime': [model.endTime],
      // 'groupId': [model.groupId, [Validators.required]]
    });
    return form;
  }

  /*
  *check validate form after submit
  */
  checkValidate(createTopicForm: FormGroup) {
    if (!createTopicForm) {
      return false;
    }
    const form = createTopicForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        this.formErrors[field] = this.validateForm(form, field, 'error');
      }
    }
    return this.formErrors;
  }

  // getValidationMessages() {
  //   this.translate.get('PR0007_PAGE').subscribe((res: any) => {
  //     this.messageValidationError = {
  //       'groupId': {
  //         'required': res.GROUP_ID_REQUIRED,
  //       },
  //       'presentationFrameId': {
  //         'required': res.PRESENTATION_FRAME_REQUIRED,
  //       },
  //       'place': {
  //         'maxlength': res.PLACE_MAX_LENGTH,
  //       },
  //       'comment': {
  //         'maxlength': res.COMMENT_MAX_LENGTH,
  //       }
  //     };
  //   });
  // }

  checkError(formErrors: any) {
    for (const field in formErrors) {
      if (formErrors[field] !== '') {
        return true;
      }
    }
    return false;
  }
  validateForm(form: FormGroup, field: string, validationMessages: any) {
    let messages = '';
    const control = form.get(field);
    if (control && !control.valid) {
      for (const key in control.errors) {
        if (control.errors.hasOwnProperty(key)) {
          messages = validationMessages;
        }
      }
    }
    return messages;
  }
}
