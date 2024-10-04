import '../repositories/user_repository.dart';
import '../entities/user.dart';

class UserService {
  final UserRepository userRepository;

  UserService(this.userRepository);

  Future<User> fetchUserById(String id) {
    return userRepository.getUserById(id);
  }

  Future<List<User>> fetchAllUsers() {
    return userRepository.getAllUsers();
  }
}
