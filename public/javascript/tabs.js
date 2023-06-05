const searchBtn = document.getElementById('search-tab');
const search = document.getElementById('search');
const overviewBtn = document.getElementById('overview-tab');
const overview = document.getElementById('overview');
const qaBtn = document.getElementById('q&a-tab');
const qa = document.getElementById('q&a');
const notesBtn = document.getElementById('notes-tab');
const notes = document.getElementById('notes');
const announcementshBtn = document.getElementById('announcements-tab');
const announcements = document.getElementById('announcements');
const reviewsBtn = document.getElementById('reviews-tab');
const reviews = document.getElementById('reviews');
const learningToolsBtn = document.getElementById('learning-tools-tab');
const learningTools = document.getElementById('learning-tools');
const commentsBtn = document.getElementById('comments-tab');
const comments = document.getElementById('comments');

function reset(){
    searchBtn.classList.remove('active');
    overviewBtn.classList.remove('active');
    qaBtn.classList.remove('active');
    notesBtn.classList.remove('active');
    announcementshBtn.classList.remove('active');
    reviewsBtn.classList.remove('active');
    learningToolsBtn.classList.remove('active');
    commentsBtn.classList.remove('active');

    search.classList.add('hidden');
    overview.classList.add('hidden');
    qa.classList.add('hidden');
    notes.classList.add('hidden');
    announcements.classList.add('hidden');
    reviews.classList.add('hidden');
    learningTools.classList.add('hidden');
    comments.classList.add('hidden');
}

searchBtn.addEventListener('click', ()=>{
    reset();
    searchBtn.classList.add('active');
    search.classList.remove('hidden');
});
overviewBtn.addEventListener('click', ()=>{
    reset();
    overviewBtn.classList.add('active');
    overview.classList.remove('hidden');
});
qaBtn.addEventListener('click', ()=>{
    reset();
    qaBtn.classList.add('active');
    qa.classList.remove('hidden');
});
notesBtn.addEventListener('click', ()=>{
    reset();
    notesBtn.classList.add('active');
    notes.classList.remove('hidden');
});
announcementshBtn.addEventListener('click', ()=>{
    reset();
    announcementshBtn.classList.add('active');
    announcements.classList.remove('hidden');
});
reviewsBtn.addEventListener('click', ()=>{
    reset();
    reviewsBtn.classList.add('active');
    reviews.classList.remove('hidden');
});
learningToolsBtn.addEventListener('click', ()=>{
    reset();
    learningToolsBtn.classList.add('active');
    learningTools.classList.remove('hidden');
});
commentsBtn.addEventListener('click', ()=>{
    reset();
    commentsBtn.classList.add('active');
    comments.classList.remove('hidden');
});