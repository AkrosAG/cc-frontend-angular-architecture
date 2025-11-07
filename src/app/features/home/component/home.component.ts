import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';

import {Snippet, SnippetComponent} from '@features/snippets';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SnippetComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly fb = inject(FormBuilder);


  @Input() snippets: Snippet[];

  @Output() addSnippet = new EventEmitter<Snippet>();

  addSnippetForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  onSubmit() {
    this.addSnippet.emit({
      title: this.addSnippetForm.get('title').value,
      content: this.addSnippetForm.get('content').value,
    });
    this.addSnippetForm.reset();
  }
}
