import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/user.dart';
import 'user_repository.dart';

class UserRepositoryImpl implements UserRepository {
  UserRepositoryImpl({required this.apiUrl});

  final String apiUrl;

  @override
  Future<List<User>> getUsers() async {
    final http.Response response = await http.get(Uri.parse('$apiUrl/users'));
    if (response.statusCode == 200) {
      final List<dynamic> jsonResponse =
          json.decode(response.body) as List<dynamic>;
      return jsonResponse
          .map((dynamic user) => User.fromJson(user as Map<String, dynamic>))
          .toList();
    } else {
      throw Exception('Failed to load users');
    }
  }

  @override
  Future<User> getUserById(int id) async {
    final http.Response response =
        await http.get(Uri.parse('$apiUrl/users/$id'));
    if (response.statusCode == 200) {
      return User.fromJson(json.decode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Failed to load user');
    }
  }

  @override
  Future<void> createUser(User user) async {
    final http.Response response = await http.post(
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
    final http.Response response = await http.put(
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
    final http.Response response =
        await http.delete(Uri.parse('$apiUrl/users/$id'));
    if (response.statusCode != 200) {
      throw Exception('Failed to delete user');
    }
  }
}
