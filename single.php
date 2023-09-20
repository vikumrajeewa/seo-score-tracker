 <!-- Your article sol depth -->
 <div class="article-content">
  <!-- Your article content goes here -->
</div>
<div class="scroll-depth">
  Scroll Depth: <?php echo get_post_meta(get_the_ID(), 'scroll_depth', true); ?>%
</div>

<div class="new-session-percentage">
  New Session Percentage: <?php echo get_post_meta(get_the_ID(), 'new_session_percentage', true); ?>%
</div>

<div class="like-count-percentage">
  Like Count Percentage: <?php echo get_post_meta(get_the_ID(), 'like_count_percentage', true); ?>%
</div>
