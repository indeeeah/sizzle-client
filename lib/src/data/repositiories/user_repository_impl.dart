import 'package:http/http.dart' as http;
import 'dart:convert';
import 'user_repository.dart';
import '../models/user.dart';

class UserRepositoryImpl implements UserRepository {
  final String apiUrl;

  UserRepositoryImpl({required this.apiUrl});

  @override
  Future<List<User>> getUsers() async {
    final response = await http.get(Uri.parse('$apiUrl/users'));
    if (response.statusCode == 200) {
      List<dynamic> jsonResponse = json.decode(response.body);
      return jsonResponse.map((user) => User.fromJson(user)).toList();
    } else {
      throw Exception('Failed to load users');
    }
  }

  @override
  Future<User> getUserById(int id) async {
    final response = await http.get(Uri.parse('$apiUrl/users/$id'));
    if (response.statusCode == 200) {
      return User.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load user');
    }
  }

  @override
  Future<void> createUser(User user) async {
    final response = await http.post(
      Uri.parse('$apiUrl/users'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(user.toJson()),
    );
    if (response.statusCode != 201) {
      throw Exception('Failed to create user');
    }
  }

  @override
  Future<void> updateUser(User user) async {
    final response = await http.put(
      Uri.parse('$apiUrl/users/${user.id}'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(user.toJson()),
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to update user');
    }
  }

  @override
  Future<void> deleteUser(int id) async {
    final response = await http.delete(Uri.parse('$apiUrl/users/$id'));
    if (response.statusCode != 200) {
      throw Exception('Failed to delete user');
    }
  }
}
