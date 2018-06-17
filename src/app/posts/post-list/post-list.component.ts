import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  subscribtion: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.subscribtion = this.postsService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {this.posts = posts; }
    );
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
