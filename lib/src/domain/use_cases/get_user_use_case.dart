import '../entities/user.dart';
import '../repositories/user_repository.dart';

class GetUserUseCase {
  GetUserUseCase(this.userRepository);

  final UserRepository userRepository;

  Future<User> execute(String id) {
    return userRepository.getUserById(id);
  }
}
