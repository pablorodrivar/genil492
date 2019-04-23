export class Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    thumbnail: string;
    gallery: string[]

    getId() {
        return this.id;        
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    getDate() {
        return this.date;
    }

    setDate(date: string) {
        this.date = date;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    setThumbnail(thumbnail: string) {
        this.thumbnail = this.thumbnail;
    }

    getGallery() {
        return this.gallery;
    }

    setGallery(gallery: string[]) {
        this.gallery = gallery;
    }
}