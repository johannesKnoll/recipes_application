package com.example.accessingmongodbdatarest.Payload.Request;

public class RatingRequest {

    private int rating;

    public RatingRequest(int rating) {
        this.rating = rating;
    }
    public RatingRequest(){

    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
