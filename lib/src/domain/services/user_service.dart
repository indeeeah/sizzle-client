import '../entities/user.dart';
import '../repositories/user_repository.dart';

class UserService {
  UserService(this.userRepository);

  final UserRepository userRepository;

  Future<User> fetchUserById(String id) {
    return userRepository.getUserById(id);
  }

  Future<List<User>> fetchAllUsers() {
    return userRepository.getAllUsers();
  }
}
