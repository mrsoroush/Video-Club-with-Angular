import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IComments } from 'src/app/interfaces/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @ViewChild('commentText') commentText: ElementRef;
  comment: IComments[] = [];
  isComment: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // sendComment() {
  //   this.comment = this.commentText.nativeElement.value;
  //   this.isComment = true;
  // }

  addComment(){
    let c: IComments = {
      text: this.commentText.nativeElement.value,
      like: 0,
      dislike: 0,
      star: 0,
      numberOfReviews: 0
    };
    this.comment.push(c);
    this.isComment = true;
  }

  addLike(c: IComments){
    c.like++;
  }

  addDislike(c: IComments){
    c.dislike++;
  }

  reviewsCount(c: IComments, n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }

}
