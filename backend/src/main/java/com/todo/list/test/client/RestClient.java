package com.todo.list.test.client;

import com.todo.list.entities.ToDoItemEntity;
import com.todo.list.utilities.Utility;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

public class RestClient {
    public void getItemById(int id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/items/{id}";
        HttpEntity<String> httpEntity = new HttpEntity<String>(httpHeaders);
        ResponseEntity<ToDoItemEntity> responseEntity = restTemplate.exchange(url, HttpMethod.GET, httpEntity,
                ToDoItemEntity.class, id);
        if (responseEntity != null) {
            ToDoItemEntity item = responseEntity.getBody();
            System.out.println(item);
        }
    }

    public void getAllItem() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/items";
        HttpEntity<String> httpEntity = new HttpEntity<String>(httpHeaders);
        ResponseEntity<ToDoItemEntity[]> responseEntity = restTemplate.exchange(url, HttpMethod.GET, httpEntity,
                ToDoItemEntity[].class);
        ToDoItemEntity[] items = responseEntity.getBody();
        for (ToDoItemEntity item : items) {
            System.out.println(item);
        }
    }

    public void addItem() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/item";
        ToDoItemEntity item = new ToDoItemEntity();
        item.setName("Test name");
        //item.setDate(new Date());

        item.setDone(false);
        HttpEntity<ToDoItemEntity> requestEntity = new HttpEntity<>(item, httpHeaders);
        restTemplate.put(url, requestEntity);

    }

    public void updateItem(int id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/item";
        ToDoItemEntity item = new ToDoItemEntity();
        item.setName("Test name updated");
        //item.setDate(new Date());
        System.out.println(new Date());

        item.setDone(false);
        item.setId(id);
        HttpEntity<ToDoItemEntity> requestEntity = new HttpEntity<>(item, httpHeaders);
        restTemplate.postForLocation(url, requestEntity);
    }

    public void incrementItem(long id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/increment";
        HttpEntity<Long> requestEntity = new HttpEntity<>(id, httpHeaders);
        restTemplate.postForLocation(url, requestEntity);
    }

    public void decrementItem(long id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = Utility.apiHostName +"/api/decrement";
        HttpEntity<Long> requestEntity = new HttpEntity<>(id, httpHeaders);
        restTemplate.postForLocation(url, requestEntity);
    }

    public void deleteItem(int id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        String url = Utility.apiHostName +"/api/item/" + id;
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(url);
    }

    public static void main(String[] args) {
        RestClient client = new RestClient();
//        client.addItem();
//        client.getItemById(1);
//        client.updateItem(1);
//        client.getItemById(1);
//        client.addItem();
//        client.getAllItem();
//        client.deleteItem(1);
//        client.getAllItem();
//        client.incrementItem(1);
//        client.decrementItem(1);
    }

}
