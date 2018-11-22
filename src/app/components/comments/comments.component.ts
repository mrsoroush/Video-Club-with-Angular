import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @ViewChild('commentText') commentText: ElementRef;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  sendComment() {
    this.text = this.commentText.nativeElement.value;
  }

}
