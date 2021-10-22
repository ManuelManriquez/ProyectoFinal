import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmUploadComponent } from './modal-confirm-upload.component';

describe('ModalConfirmUploadComponent', () => {
  let component: ModalConfirmUploadComponent;
  let fixture: ComponentFixture<ModalConfirmUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
